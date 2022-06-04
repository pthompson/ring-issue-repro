defmodule RingIssueReproWeb.Application do
  @moduledoc false
  require Logger

  use Application

  def start(_type, _args) do
    Logger.info("RingIssueReproWeb application starting.")


    # List all child processes to be supervised
    children = [
      # Start the Endpoint (http/https)
      RingIssueReproWeb.Endpoint,
      {Phoenix.PubSub, name: RingIssueReproWeb.PubSub}
    ]

    opts = [strategy: :one_for_one, name: RingIssueReproWeb.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    RingIssueReproWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
