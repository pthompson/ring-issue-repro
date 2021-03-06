defmodule Mix.Tasks.Tailwind.Gen.Whitelist do
  use Mix.Task

  @shortdoc "Generates CSS class whitelist from classes found in <app>/**/*.ex and <app>_web/**/*.leex files."
  def run(_args) do
    IO.puts("...Generating assets/whitelist.js")

    web_dir()
    |> find_files()
    |> Enum.map(&grep(&1, ["class:\s", "#\s:class"]))
    |> Enum.filter(fn {_path, list} -> list != [] end)
    |> Enum.map(&extract_classes(&1))
    |> List.flatten()
    |> generate_whitelist
    |> write_whitelist

    IO.puts("... assets/whitelist.js written")
  end

  defp write_whitelist(body) do
    {:ok, file} = File.open("assets/whitelist.js", [:write])
    IO.binwrite(file, body)
    File.close(file)
  end

  defp generate_whitelist(classes) do
    head = "const whitelist ="
    tail = "module.exports = whitelist;"
    body = "['" <> Enum.join(classes, "', '") <> "']"

    [head, body, tail]
    |> Enum.join("\n")
  end

  defp extract_classes({_path, matches}) do
    matches
    |> Enum.map(&extract_classes_from_line(&1))
  end

  # line is known to have matches
  defp extract_classes_from_line(line) do
    case do_regex(line) do
      nil ->
        []

      list ->
        List.last(list)
        |> String.split()
    end
  end

  defp do_regex(line) do
    case Regex.run(~r/class\:\s"([^"].*?)"/, line) do
      nil ->
        # capture # :class
        Regex.run(~r/"([^"].*?)"/, line)

      list ->
        list
    end
  end

  defp web_dir(app \\ get_app()) do
    Path.join("lib", "#{app}")
  end

  defp get_app() do
    Mix.Project.config() |> Keyword.get(:app)
  end

  def get_env() do
    case Application.fetch_env!(:ring_issue_repro_web, :env) do
      :prod -> "production"
      _ -> "development"
    end
  end

  def grep(path, str) do
    matches =
      File.stream!(path)
      |> Stream.filter(&String.contains?(&1, str))
      |> Enum.to_list()

    {path, matches}
  end

  def find_files(filepath) do
    _find_files(filepath)
  end

  defp _find_files(filepath) do
    cond do
      # String.contains?(filepath, ".git") -> []
      true -> expand(File.ls(filepath), filepath)
    end
  end

  defp expand({:ok, files}, path) do
    files
    |> Enum.flat_map(&_find_files("#{path}/#{&1}"))
  end

  defp expand({:error, _}, path) do
    [path]
  end
end
