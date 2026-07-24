import { colombiaInvitations } from "./colombia";

export const mexicoInvitations = colombiaInvitations.map((invitation) => ({
  ...invitation,

  country: "mx" as const,

  price:
    invitation.price === "$49"
      ? "MX$800"
      : "MX$500",
}));