# GreifPrevention

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

GreifPrevention compatibility module added compaitibility with GF.

## How does it work

This module allow QuickShop-Hikari check if player have permission to create or use QuickShop in specific region.

And delete shops when claim removed, untrusted, unclimed, expired, resized or subclaim created.

## Configuration

```yaml
#Should we prevent the creation of a shop or trade with a shop outside GriefPrevention's area?
whitelist-mode: true
#Which check does a player need to pass to create a shop?
#Available fields:
#BUILD = The player must have the ability to build in the target claim.
#INVENTORY = The player must be able to access containers.
#ACCESS = The Player must have the ability to access the target claim.
create: INVENTORY
#Which checks does a player need to pass to trade with a shop?
#You can use multiple checks at the same time.
#Priority: UP > DOWN
#Available fields:
#BUILD = The player must have the ability to build in the target claim.
#INVENTORY = The player must be able to access containers.
#ACCESS = The Player must have the ability to access the target claim.
trade: [ ]
#Should QuickShop delete shops if the trust permission of the shop owner has been changed on the claim/subclaim?
#Removes a shop if the shop owner no longer has permission to build a shop there.
#Never removes a shop of the claim owner.
delete-on-claim-trust-changed: true
#Should QuickShop delete shops if the claim/subclaim has been unclaimed?
#Removes all the shops that were inside the claim/subclaim that was unclaimed.
#Never removes a shop of the claim owner when unclaiming a subclaim.
delete-on-claim-unclaimed: true
#Should QuickShop delete shops if the claim has been expired?
#Removes all the shops that were inside the claim.
delete-on-claim-expired: true
#Should QuickShop delete shops if claim/subclaim has been resized?
#Removes a shop that the old claim contains but the new claim doesn't.
#Removes a shop if the shop was inside the subclaim but now it is outside the subclaim.
#Removes a shop if the shop was outside the subclaim but now it is inside the subclaim.
#Never removes a shop of the claim owner when resizing a subclaim.
delete-on-claim-resized: true
#Should Quickshop delete shops if a subclaim has been created?
#If a subclaim is created that will contain, initially, shops from others players, then we will remove them.
#Because they won't have, initially, permission to create a shop in that subclaim.
#Never removes a shop of the claim owner.
delete-on-subclaim-created: true
```
