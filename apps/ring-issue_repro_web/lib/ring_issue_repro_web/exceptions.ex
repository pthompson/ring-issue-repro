defmodule RingIssueReproWeb.ResourceNotFoundError do
  defexception [:message, plug_status: 404]
end

defmodule RingIssueReproWeb.UserNotAuthorizedError do
  defexception [:message, plug_status: 403]
end
