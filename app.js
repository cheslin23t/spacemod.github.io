const express = require('express')
const app = express()
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();
var http = require('http');
const fetch = require('node-fetch');
const btoa = require('btoa');
const passport = require('passport')
app.get("/", async (req, res) =>{
  res.sendFile(__dirname + "/index.html")
  var code = req.query['code']
  if(code){
    
    console.log("User with code")
    console.log(code)
  }
  if(code){
    const redirect = encodeURIComponent('https://www.spacemod.tk/');

const creds = btoa(`753578252047745055:NxxAPMegtlyvLflfM0bmh9iPEiZbrLn-`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();



  var token = json.access_token
  console.log(json)
  var userjson = await oauth.getUser(token)
  console.log(userjson)
  }
})
const { Router } = require("express");

const route = Router();


app.listen(1234)