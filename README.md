# Turnero

Install Docker
==============
sudo apt-get install docker


go to where docker-compose.yml file is


build image server
==================
sudo docker-compose build


Execute server and database
===========================
sudo docker-compose up


stop all containers of docker
=============================
sudo docker stop $(sudo docker ps -a -q)


delete all containers of docker
===============================
sudo docker rm $(sudo docker ps -a -q)