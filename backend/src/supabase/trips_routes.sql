create table trips_routes as
    select distinct on(stops.stop_id, stops.stop_name, trips.route_id)
        stops.stop_id,
        stops.stop_name,
        stops.stop_lat,
        stops.stop_lon,
        trips.direction_id,
        trips.route_id,
        routes.route_short_name,
        stop_times.stop_sequence
    from trips
    inner join stop_times on stop_times.trip_id = trips.trip_id
    inner join routes on routes.route_id = trips.route_id
    inner join stops on stops.stop_id = stop_times.stop_id;