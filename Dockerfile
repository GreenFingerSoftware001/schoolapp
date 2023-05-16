from ubuntu:20.04

#update system
RUN DEBIAN_FRONTED="noninteractive" apt-get update && apt-get -y install tzdata

#install python
RUN apt-get update && \
    apt-get install python -y && \
    apt-get install python3-pip -y

#install all
 RUN pip3 install django && \
     pip3 install pillow

#copy
 RUN mkdir /code 
 COPY . /code/

EXPOSE 8000

