# alongtheway
Application to view cool attractions along translink lines.

# How to run the Backend
Our application uses the GTFS (General Transit Feed Specification) static files to parse all the stops related to transit lines. In this case we are using the static apis provided by Translink.ca that can be referenced in server/data.

# Set up database:
1. import routes.txt, trips.txt, stops.txt, stops_times.txt into there respetive data tables. https://gtfs.org/documentation/schedule/reference/#stop_timestxt visit this site for more info about foreign key relations and data types.
2. Run server/supabase/trips_routes.sql on supabase to create the table that maps the relations between the tables.

# Run server
1. npm install
2. npm run dev or npm run start to run in a dev environment

