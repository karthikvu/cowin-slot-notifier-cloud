ALTER TABLE public.subscriptions
    ADD COLUMN active boolean;

ALTER TABLE public.subscriptions
    ADD COLUMN deleted boolean;

ALTER TABLE public.subscriptions
    ADD COLUMN "createdAt" date NOT NULL;

ALTER TABLE public.subscriptions
    ADD COLUMN "updatedAt" date;