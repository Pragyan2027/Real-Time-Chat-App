FROM eclipse-temurin:17-jdk

WORKDIR /appgit push origin main


COPY . .

RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/*.jar"]
