# Early Finish requires a disposition: CTAP balance debit or annual leave

Early Finish is logged as an NPT entry (reducing this week's target like other NPT), but uniquely also requires the engineer to choose at logging time where the hours are paid from: either debit their CTAP balance, or debit their Workday annual leave allowance. Without that disposition step, an Early Finish would be cost-free in the model — target drops, no other consequence — which doesn't match the employer's CTAP scheme: finishing early is something the engineer pays for, one wallet or the other.

Status: not yet implemented. Today's Early Finish tile creates a plain NPT entry; we need the tile flow to ask "CTAP balance or annual leave?" and apply the appropriate debit. Annual-leave disposition has no effect on app math (it's a Workday transaction); CTAP-balance disposition needs a new mechanism to debit the running balance directly.
