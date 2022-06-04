defmodule RingIssueReproWeb.SessionLive do
  import Phoenix.LiveView

  def on_mount(_, _params, session, socket) do
      {:cont, socket}
    end
end
