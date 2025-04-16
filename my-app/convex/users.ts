import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    if (!existingUser) {
      console.log("Creating new user:", args);

      await ctx.db.insert("users", {
        userId: args.userId,
        email: args.email,
        name: args.name,
        isPro: false,
      });

      console.log("User created successfully:", args);
    } else {
      console.log("User already exists:", existingUser);
    }
  },
});

export const getUser = query({
  args: { userId: v.string() },

  handler: async (ctx, args) => {
    if (!args.userId) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    if (!user) return null;

    return user;
  },
});

export const upgradeToPro = mutation({
  args: {
    email: v.string(),
    lemonSqueezyCustomerId: v.string(),
    lemonSqueezyOrderId: v.string(),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    console.log("Upgrading user to Pro with email:", args.email);

    const user = await ctx.db
  .query("users")
  .first();

if (!user) {
  console.error("No users found in the database.");
  throw new Error(`No users found. for email ${args.email}` );
}

console.log("First user found:", user);

    console.log("User found:", user);

    await ctx.db.patch(user._id, {
      isPro: true,
      proSince: new Date().getTime(),
      lemonSqueezyCustomerId: args.lemonSqueezyCustomerId,
      lemonSqueezyOrderId: args.lemonSqueezyOrderId,
    });

    console.log("User upgraded to Pro successfully:", user._id);

    return { success: true };
  },
});