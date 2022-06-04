defmodule RingIssueReproWeb.MixProject do
  use Mix.Project

  def project do
    [
      app: :ring_issue_repro_web,
      version: "0.3.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.11",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      aliases: aliases()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {RingIssueReproWeb.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.6"},
      {:phoenix_pubsub, "~> 2.1"},
      {:phoenix_html, "~> 3.2"},
      {:phoenix_ecto, "~> 4.4"},
      {:phoenix_live_view, "~> 0.17.9"},
      {:phoenix_live_dashboard, "~> 0.6.5"},
      {:telemetry, "~> 1.0.0"},
      {:telemetry_poller, "~> 1.0"},
      {:telemetry_metrics, "~> 0.6"},
      {:circular_buffer, "~> 0.4"},
      {:plug_cowboy, "~> 2.5"},
      {:gettext, "~> 0.19"},
      {:phoenix_live_reload, "~> 1.3", only: :dev},
      {:dialyxir, "~> 1.1", only: [:test], runtime: false},
      {:mix_audit, "~> 1.0", only: [:dev, :test], runtime: false},
    ]
  end

  defp aliases do
    [
      "css.update": ["tailwind.gen.whitelist", "node.update", "phx.digest"]
    ]
  end
end
