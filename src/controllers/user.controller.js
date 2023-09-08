export default {
  index: (request, response, next) => {
    const { slack_name, track } = request.query
    const date = new Date()

    const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    function getUTCTimeWithAccuracy() {
      const currentMins = date.getUTCMinutes()
      const currentSecs = date.getUTCSeconds()

      const offset = (Math.random() - 0.5) * 4
      const offsetSecs = offset * 60

      const adjustedSecs = currentSecs + offsetSecs
      const adjustedMins = currentMins + Math.floor(adjustedSecs / 60)

      const finalMins = adjustedMins % 60

      const adjustedDate = new Date()
      adjustedDate.setUTCHours(date.getUTCHours(), finalMins, Math.floor(adjustedSecs % 60))

      return adjustedDate.toISOString()
    }

    response.status(200).json({
      slack_name,
      current_day: dayArr[date.getDay()],
      utc_time: getUTCTimeWithAccuracy(),
      track,
      github_file_url: "",
      github_repo_url: "https://github.com/ChukwunonsoFrank/hngx-task-one",
      status_code: 200
    })
  },
}
