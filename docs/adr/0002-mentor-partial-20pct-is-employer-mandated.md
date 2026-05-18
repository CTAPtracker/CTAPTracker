# Mentor Partial 20% reduction is employer-mandated

The 20% target reduction applied to a Mentor Partial day comes from the employer's CTAP scheme — it is not a heuristic we picked and not a tuneable parameter. The value must stay constant in code; if a future reader sees it and tries to "improve" the app by making it configurable per engineer, they'd be misrepresenting the actual bonus rules. If the employer changes the figure, update it in one place (`weekMentorTargetReduction` in `data.js`) and leave the value as a hard-coded constant.
