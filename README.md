# Week 2 - Advanced Typescript

Week 2 codealongs, excersies and workshop.

## Lesson example

- [Presentation Teori Vecka 2](https://docs.google.com/presentation/d/16nMAJTrW2B3ioYsBEEFrWGdAz3iMSri_6kTZrBgcvgY/edit?usp=sharing)
- [Lesson code](./lesson-code/)

## Exercises

Vecka 44 – Tisdagens Övningar
Syfte: Fördjupa förståelsen för avancerade TypeScript-koncept som introducerades under måndagen.

Steg 2 - Övningar

Övning 1: Typade Funktioner
Uppgift:

Enkel Funktion:

Skriv en funktion calculateArea som tar emot width och height som number och returnerar area som number. Typa både argument och returvärde.

Funktion med Optional Parameter:

Skriv en funktion greet som tar emot name som string och en optional title som string. Returnera en hälsning som inkluderar titeln om den finns.

Mål: Förstå hur man deklarerar funktioner med typade argument och returvärden, inklusive optionala parametrar.

Övning 2: Generics
Uppgift:

Generisk Funktion:

Skapa en generisk funktion identity<T>(arg: T): T som returnerar argumentet som tas emot.

Testa Funktionen:

Använd funktionen med olika typer:

Generisk Klass:

Implementera en generisk klass DataStorage<T> med metoder för att lägga till, ta bort och hämta data.

Använd klassen:

Mål: Lära sig hur generics kan användas för att skapa återanvändbar och typoberoende kod.

Övning 3: Utility Types

Uppgift:

Använda Partial:

Givet ett interface User:
interface User {
id: number;
name: string;
email: string;
}

Skapa en typ PartialUser som gör alla User-egenskaper optionala:

Använda Omit:

Skapa en typ UserWithoutEmail som är samma som User men utan email-egenskapen:

Använda Record:

Skapa en typ PhoneBook som mappar från en persons namn (string) till deras telefonnummer (number):

Mål: Förstå och tillämpa TypeScripts utility types för att manipulera och skapa nya typer.

Övning 4: Type Assertions

Uppgift:

Enkel Type Assertion:

Givet en variabel let someValue: unknown = "Hello World";, använd type assertion för att behandla den som en string och anropa someValue.length.

Dubbel Type Assertion:

Konvertera en string till number via unknown:

Diskussion:

Diskutera varför och när man bör undvika sådana konstruktioner.

Mål: Förstå hur och när man använder type assertions, och vilka risker som kan vara involverade.

Övning 5: Typade Asynkrona Funktioner och Promises

Uppgift:

Asynkron Funktion med Promise:

Skriv en funktion fetchNumber som returnerar en Promise<number> som resolver till talet 42 efter 2 sekunder.

Använda async/await:

Skriv en asynkron funktion getAnswer som använder await för att hämta värdet från fetchNumber och loggar resultatet.

Mål: Lära sig att typa asynkrona funktioner och hantera Promise-objekt i TypeScript.

Övning 6: Typade API-anrop

Uppgift:

Definiera Gränssnitt för API-svar:

Använd en publik API, till exempel JSONPlaceholder: https://jsonplaceholder.typicode.com/posts/1

Definiera ett interface Post som matchar strukturen av data som returneras.

Gör ett API-anrop:

Skriv en asynkron funktion getPost som hämtar data från API och returnerar ett Post-objekt.

Mål: Praktisera att göra typade API-anrop och hantera asynkron data.

Avancerade Övningar

Övning 7: Bygga en Generisk API-klient

Uppgift:

Skapa en generisk klass ApiClient<T> som kan användas för att göra GET, POST, PUT och DELETE-anrop till ett API.
Använd generics för att typa inkommande och utgående data.

Testa Din ApiClient:

Använd klassen med olika typer av data.

Mål: Tillämpa kunskaper om generics och typning i en praktisk och avancerad uppgift.

Övning 8: Avancerade Utility Types

Uppgift:

Använda Required och Readonly:

Givet interfacet User från tidigare, skapa nya typer där alla egenskaper är obligatoriska respektive readonly.

Utforska Exclude och Extract:

Skapa unionstyper och använd Exclude och Extract för att manipulera dem.

Mål: Fördjupa förståelsen för TypeScripts avancerade utility types och hur de kan användas.

Övning 9: Bygga en Generisk Repository-klass

Uppgift:

Implementera en generisk klass Repository<T, ID> som kan användas för CRUD-operationer.

Metoder ska inkludera:
findById(id: ID): Promise<T | null>
findAll(): Promise<T[]>
save(entity: T): Promise<T>
delete(id: ID): Promise<void>
Använd en mock-databas (som en array) för att lagra data.

Testa klassen med olika typer, till exempel User och Product.

Mål: Förstå avancerad användning av generics och hur man kan skapa flexibla och återanvändbara datahanteringsklasser.

Övning 10: Avancerad Typmanipulation med Conditional Types

Uppgift:

Utforska TypeScripts Conditional Types genom att skapa en typ Mutable<T> som gör alla readonly-egenskaper i T skrivbara.

Använd denna typ på ett interface och demonstrera skillnaden.

Skapa en typ Nullable<T> som gör alla egenskaper i T tillåter null.

Mål: Lära sig om conditional types och hur man manipulerar typer på en avancerad nivå.
