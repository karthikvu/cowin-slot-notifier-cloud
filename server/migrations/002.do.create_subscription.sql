CREATE TABLE public.subscriptions
(
    id serial NOT NULL,
    userid character varying(100) NOT NULL,
    name text,
    phone numeric(13) NOT NULL,
    email character varying(100),
    age numeric(3) NOT NULL,
    pincode numeric(6) NOT NULL,
    slack character varying(200),
    PRIMARY KEY (id)
);