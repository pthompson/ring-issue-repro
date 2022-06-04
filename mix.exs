defmodule RingIssueReproUmbrella.MixProject do
  use Mix.Project

  def project do
    [
      apps_path: "apps",
      version: "0.3.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      elixir: "~> 1.11",
      aliases: aliases(),
      releases: [
        ring_issue_repro: [
          applications: [
            ring_issue_repro_web: :permanent
          ]
        ]
      ]
    ]
  end

  defp deps do
    [
      {:phoenix_live_view, "~> 0.17.9"}
    ]
  end

  defp aliases do
    [
      # run `mix setup` in all child apps
      setup: ["cmd mix setup"]
    ]
  end
end
