defmodule RingIssueReproWeb.ViewHelpers do
  @moduledoc false

  @doc """
  Given a list of 2 or 3-element tuples, outputs a CSS string

  In the case of 2-element tuples:
    - first element is the CSS class name
    - second element is the conditional boolean
    usage: class_names("mt-2 text-xl", "font-bold": @cond1, "p-4": @cond2)

  In the case of 3-element tuples
    - first element is the conditional boolean
    - second element is the CSS class name if condition is true
    - third element is the CSS class name if condition is false
    usage: class_names("mt-2 text-xl", [{@cond, "p-4", "p-6"}])
  """
  def class_names(classes, opts) when is_list(opts) do
    [classes, ?\s, class_names(opts)]
  end

  def class_names(opts) when is_list(opts) do
    Enum.reduce(opts, [], fn
      {_el, false}, acc -> acc
      {el, true}, acc -> [el | acc]
      {el, func}, acc when is_function(func) -> if func.(), do: [el | acc], else: acc
      {true, el, _else}, acc -> [el | acc]
      {false, _if, el}, acc -> [el | acc]
    end)
    |> Enum.intersperse(?\s)
  end
end
