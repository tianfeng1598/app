const path = require('path')

const notification = {
  title: 'Basic Notification',
  body: 'Short message part',
  icon: path.join(__dirname, '../../../assets/img/programming.png')
}

const notificationButton = document.getElementById('basic-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
