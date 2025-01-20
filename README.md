# CareTracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development along with nodemon
```
npm run dev
```

### Compiles and minifies for production
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
Sure! Here's a pointwise breakdown of key topics to learn Spring Framework using basic Java:

---

### 1. **Introduction to Spring Framework**
   - **What is Spring?**
     - A lightweight framework for building Java applications.
     - Provides comprehensive infrastructure support for developing Java applications.
   - **Features of Spring:**
     - Dependency Injection (DI)
     - Aspect-Oriented Programming (AOP)
     - Transaction Management
     - Data Access
     - Model-View-Controller (MVC) framework
   - **Spring Modules:**
     - Core Container
     - Data Access/Integration
     - Web/REST
     - AOP (Aspect-Oriented Programming)
     - Messaging

### 2. **Setting Up Spring Project (Using Spring Boot)**
   - **What is Spring Boot?**
     - A tool for simplifying the setup and development of Spring applications.
   - **Creating Spring Boot Project:**
     - Use [Spring Initializr](https://start.spring.io/) to generate the project with dependencies.
     - Maven/Gradle as build tools.
   - **Basic Structure of Spring Boot Project:**
     - `src/main/java` for Java classes.
     - `src/main/resources` for configuration files (application.properties/yml).

### 3. **Dependency Injection (DI)**
   - **What is Dependency Injection?**
     - A technique where an object’s dependencies (other objects it needs) are injected by the Spring container.
   - **Types of DI:**
     - Constructor Injection
     - Setter Injection
     - Field Injection
   - **Creating Beans in Spring:**
     - Use `@Component`, `@Service`, `@Repository`, `@Controller` annotations for marking beans.
     - Use `@Autowired` to inject dependencies.

### 4. **Spring Bean Lifecycle**
   - **Bean Creation Process:**
     - Spring Container creates beans on startup.
     - The lifecycle includes initialization and destruction phases.
   - **Common Annotations:**
     - `@PostConstruct`: Called after bean initialization.
     - `@PreDestroy`: Called before bean destruction.
   - **Bean Scopes:**
     - Singleton (default)
     - Prototype
     - Request
     - Session

### 5. **Spring AOP (Aspect-Oriented Programming)**
   - **What is AOP?**
     - A programming paradigm to separate cross-cutting concerns like logging, security, and transactions.
   - **Key Concepts:**
     - Aspect
     - JoinPoint
     - Advice
     - Pointcut
     - Weaving
   - **Annotations:**
     - `@Aspect` for aspect classes.
     - `@Before`, `@After`, `@Around`, `@AfterReturning`, `@AfterThrowing` for advices.

### 6. **Spring MVC (Model-View-Controller)**
   - **Spring MVC Architecture:**
     - DispatcherServlet: Central servlet that routes requests.
     - Controller: Handles business logic.
     - ViewResolver: Resolves view (JSP, Thymeleaf, etc.).
   - **Basic Annotations:**
     - `@Controller`: Marks a class as a controller.
     - `@RequestMapping`: Maps HTTP requests to methods.
     - `@GetMapping`, `@PostMapping`: Shortcut annotations for GET and POST requests.
   - **View Technologies:**
     - JSP (Java Server Pages)
     - Thymeleaf (template engine)

### 7. **Spring Data Access and JDBC**
   - **JDBC with Spring:**
     - `JdbcTemplate`: Simplifies database interaction in Spring.
     - Example usage: Connecting to a database and executing SQL queries.
   - **Spring Data JPA:**
     - `@Entity`: Marks a class as an entity.
     - `@Id`: Marks the primary key field.
     - Repositories (`JpaRepository`, `CrudRepository`) for data operations.
     - `@Query`: Custom queries.

### 8. **Spring Transactions**
   - **What is a Transaction?**
     - A set of operations that are executed as a single unit of work.
   - **Declarative Transaction Management:**
     - Using `@Transactional` to manage transactions.
     - Rollback on exception.
   - **Programmatic Transaction Management:**
     - Using `PlatformTransactionManager`.

### 9. **Spring Security**
   - **What is Spring Security?**
     - A framework to secure your Java applications.
   - **Basic Features:**
     - Authentication
     - Authorization
   - **Configuring Security:**
     - Use `@EnableWebSecurity` to enable Spring Security.
     - Define custom login, logout, and access control rules.

### 10. **Spring REST (RESTful Web Services)**
   - **What is REST?**
     - Representational State Transfer: A set of architectural constraints used for web services.
   - **Spring REST Controller:**
     - `@RestController`: Used for creating REST API controllers.
     - `@RequestMapping` (GET, POST, PUT, DELETE) for mapping HTTP methods.
   - **Consuming REST Services:**
     - Use `RestTemplate` or `WebClient` to consume external APIs.

### 11. **Spring Boot Actuator**
   - **What is Spring Boot Actuator?**
     - Provides production-ready features like health checks, metrics, etc.
   - **Key Features:**
     - `/actuator/health`: Health check endpoint.
     - `/actuator/metrics`: Application metrics.
     - Custom endpoints can be created for your application.

### 12. **Spring Boot Profiles and Configuration**
   - **Application Properties/YML:**
     - Store application-specific properties (database URL, security settings).
   - **Spring Profiles:**
     - Use `@Profile` to define beans for different environments (dev, prod).
   - **External Configuration:**
     - Use `application.properties` or `application.yml` for configuring the application.

### 13. **Spring Testing**
   - **Unit Testing in Spring:**
     - Use `@SpringBootTest` to load the Spring context for testing.
   - **Mocking Dependencies:**
     - Use `@MockBean` to mock beans in unit tests.
   - **Integration Testing:**
     - Test real interaction with Spring and external systems (e.g., databases, APIs).

---

### Summary of Core Concepts
1. **Spring Core:** Focus on Dependency Injection and Beans.
2. **Spring MVC:** Learn web development with Spring's MVC structure.
3. **Spring Boot:** Simplify setup and configuration of Spring projects.
4. **Spring AOP:** Learn aspect-oriented programming techniques.
5. **Spring Data:** Understand database interaction via Spring Data JPA and JDBC.
6. **Spring Security:** Secure your application using Spring Security.
7. **Spring REST:** Build and consume RESTful web services.
8. **Testing:** Focus on unit testing and integration testing with Spring.

---

This is a basic roadmap for learning Spring using Java. Let me know if you need more details on any of the topics!
