defmodule SchoolHouseWeb.LessonController do
  use SchoolHouseWeb, :controller

  alias SchoolHouse.Lessons
  alias SchoolHouseWeb.FallbackController

  action_fallback FallbackController

  def index(conn, %{"section" => section}) do
    lessons = Lessons.list(section, Gettext.get_locale(SchoolHouseWeb.Gettext))
    page_title = String.capitalize(section)
    render(conn, "index.html", page_title: page_title, lessons: lessons, section: section)
  end

  def lesson(conn, %{"name" => name, "section" => section}) do
    locale = Gettext.get_locale(SchoolHouseWeb.Gettext)

    with {:ok, lesson} <- Lessons.get(section, name, locale) do
      all_sections =
        Lessons.filtered_lessons()
        |> Enum.map(fn {sec, _names} ->
          {sec, Lessons.list(to_string(sec), locale)}
        end)

      render(conn, "lesson.html",
        page_title: lesson.title,
        lesson: lesson,
        all_sections: all_sections
      )
    end
  end
end
