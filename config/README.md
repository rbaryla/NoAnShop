##Plik konfiguracyjny

Plik konfiguranyjny aplikacji. Plik jest obiektem JSON
o nazwie opoiwaidającej zmiennej środowiskowej **env**
serwera na którym jest uruchomiona aplikacja.

Np. development.json dla środowiska deveploperskiego.

###Opis składowych pliku
* **db** - konfiguracja połączenia z bazą danych
    * **host** - adres serwera
    * **database** - nazwa bazy danych
    * **port** - port
    * **user** - nazwa użytkownika
    * **pass** - hasło