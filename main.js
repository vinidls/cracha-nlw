const LinksSocialMedia = {
  github: 'vinidls',
  youtube: 'UCI07FMpqvZAQRsLmz3vTrkw',
  instagram: 'vinijz',
  facebook: 'vinniisilva',
  twitter: 'ViniciusdeLima16'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia.[social]}`

  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://${social}api.github.com/${LinksSocialMedia.github}`

  fetch (url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.nome
  })
}