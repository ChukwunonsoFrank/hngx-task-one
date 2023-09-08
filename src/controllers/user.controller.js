export default {
  index: (request, response, next) => {
    const { slack_name, track } = request.query
    const date = new Date()

    const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    function getUTCTimeWithAccuracy() {
      const date = new Date()
      const slice_start = date.toISOString().indexOf('.')
      const dateISOString = date.toISOString().substring(0, slice_start).concat('Z')
      return dateISOString
    }

    response.status(200).json({
      slack_name,
      current_day: dayArr[date.getDay()],
      utc_time: getUTCTimeWithAccuracy(),
      track,
      github_file_url: "https://github.com/ChukwunonsoFrank/hngx-task-one/blob/main/src/controllers/user.controller.js",
      github_repo_url: "https://github.com/ChukwunonsoFrank/hngx-task-one",
      status_code: 200
    })
  },
}
