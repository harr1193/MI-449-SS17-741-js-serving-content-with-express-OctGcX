
var express = require('express')
var app = express()
var port = process.env.PORT || 8080

const pages = [
{url: '/lions', name: 'Detroit Lions', img: '/img/lions.jpg', link: 'http://www.detroitlions.com/'},
{url: '/tigers', name: 'Detroit Tigers', img: '/img/tigers.jpg', link: 'https://www.mlb.com/tigers/'},
{url: '/pistons', name: 'Detroit Pistons', img: '/img/pistons.jpg', link: 'http://www.nba.com/pistons//'}
]

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    pages: pages
  })
})

pages.forEach(function (page) {
  app.get(page.url, function (request, response) {
    response.render('pages/teams.ejs', {
      page: page,
      pages: pages
    })
  })
})

app.listen(port)
