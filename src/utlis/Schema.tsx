import { boolean, pgTable ,serial, text, varchar} from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('tempalteSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')
})

export const userSubscriptionSchema=pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('isActive'),
    paymentID:varchar('paymentID'),
    joinDate:varchar('joinDate')
})