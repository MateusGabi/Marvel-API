FROM openjdk:8-jre-alpine
ADD . /code
WORKDIR /code
## RUN ["./gradlew", "jar"]
## CMD java -jar build/libs/Backend\ Characters-1.0-SNAPSHOT.jar
RUN ["install.sh"]
RUN ["run.sh"]
