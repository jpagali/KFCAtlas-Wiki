---
title: Social Sign In
sidebar_position: 6
---

# Social Sign In

## What It Does

Social Sign In allows customers to create an account and log in to KFC using their existing Google, Facebook, or Apple credentials — instead of creating a separate KFC-specific password.

For customers, it removes friction at registration and login. For markets, it increases account creation rates and reduces password-related support issues.

## Supported Providers

| Provider | Web | iOS | Android |
|---|---|---|---|
| Google | ✅ | ✅ | ✅ |
| Facebook | ✅ | ✅ | ✅ |
| Apple (Sign in with Apple) | ✅ | ✅ | ❌ Apple only supports this on iOS |

## How It Works

When a customer taps a social login button:

1. They are redirected to the provider's authentication screen (Google, Facebook, or Apple)
2. The provider confirms the customer's identity and returns a token
3. Atlas uses that token to create or retrieve the customer's KFC account
4. The customer is signed in

If a customer already has a KFC account with the same email address, the social login is linked to their existing account.

## Market Enablement

Social Sign In is configured per market and per provider. Each provider is enabled independently, so a market can have Google Sign In active without Facebook, for example.

The authentication flow is set in the market configuration:

```js
authenticationOptions: {
  enabledFlows: {
    MagiclinkEmail: true,   // passwordless email login (always recommended)
    Google: true,
    Facebook: false,
    Apple: true,
  },
  primaryIdentifier: 'email',
}
```

## Platforms

| Platform | Support |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

:::note
Google One Tap Login is available on web as an additional convenience layer. It shows a sign-in overlay automatically. It is optional and should always be paired with standard OAuth buttons, as it may be suppressed by browser settings.
:::
