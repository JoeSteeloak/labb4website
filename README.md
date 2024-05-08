# Webbsida med möjlighet att registrera användare och logga in

Denna webbsida är skapad för att visa hur inloggning och registrering kan gå till.

Startsidan är en inloggningsportal som tillåter användare att skriva in ett giltigt användarnamn och lösenord för att komma åt sidans skyddade innehåll.

Sidan konsumerar ett API som loggar in användare, skapar nya användare, och skapar tokens för inloggade användare så de får tillgång till skyddat innehåll. 

Skrivs rätt användarnamn och lösenord in så skickas en token tillbaka, en Jason Web Token som skapas vid lyckad inloggning sparas i LocalStorage.

Man kan också registrera en ny användare med ett unikt användarnamn och ett lösenord som haschas av APIt och skyddas på så sätt även från databasadministratören.

När man väl loggar in skickas man till en undersida som bara är tillgänglig när man väl är inloggad och varifrån man kan logga ut igen, genom att rensa LocalStorage från din token.