ALTER TABLE public.subscriptions
    ADD COLUMN "notifCount" numeric;
ALTER TABLE public.subscriptions
    ADD CONSTRAINT "userid_pincode_age" UNIQUE (userid, age, pincode);