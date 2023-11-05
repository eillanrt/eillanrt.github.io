async function fetchLastUpdate() {
  const res = await fetch(
    'https://api.github.com/repos/eillanrt/eillanrt.github.io/commits'
  )

  const data = await res.json()
  const latestCommit = data[0]

  const latestCommitTimestamp = latestCommit.commit.committer.date

  const formattedDate = new Date(latestCommitTimestamp).toLocaleString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }
  )

  const lastUpdatedLink = document.querySelector('.last-commit-timestamp')

  lastUpdatedLink.innerText = 'Last updated at: ' + formattedDate
  lastUpdatedLink.href =
    'https://github.com/eillanrt/eillanrt.github.io/commit/' + latestCommit.sha
}

export default fetchLastUpdate
