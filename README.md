<p align=center>
	<img src="https://media.discordapp.net/attachments/948141108402225184/948890934840528937/Untitled_design.png" alt=bookbot height=20% width=20%>
</p>

# BookBot

Discord bot which uses the Google Books API to show info about books.

## Features

-   allows you to search for books.
-   allows you to list book results for a given query.
-   allows you to set a favourite genre.
-   allows you to view your profile.
-   allows you to star books.

## TODO

-   cache response to avoid unneeded calls.
-   work on profile command.
-   add recommendations.

## Running

```
npm i
npm start
```

or do

```
node .
```

You can also run bookbot in test mode for development (calls nodemon instead of node). Also set the MODE in .env to TEST for per-guild slash commands (which is faster).

```
npm test
```

-   An example configuration file can be found in the [sample.env](./sample.env) file.

-   Copy this file to .env and put your bot token inside.

## Support

-   Our [Discord](https://discord.gg/zxrrTEDkMg) server.
-   Or create an [issue](https://github.com/Idlidev/bookbot/issues/new).

## Contributors

<a href="https://github.com/Idlidev/bookbot/graphs/contributors">
	<img src="https://contrib.rocks/image?repo=Idlidev/bookbot" />
</a>
