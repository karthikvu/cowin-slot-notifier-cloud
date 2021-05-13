CREATE TABLE public.notif_history
(
    id serial NOT NULL,
    subscription_id numeric NOT NULL,
    "createdAt" date NOT NULL,
    channel character varying(20),
    PRIMARY KEY (id)
);
