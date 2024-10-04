import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            "error-user-attribute-required": "Please specify this field.",
            "error-invalid-length-too-short": `Minimal length is 3.`,
            "emailInstruction":"Enter your username or email address and we will send you instructions on how to create a new password."
        },
        ja: {
            "error-user-attribute-required": "このフィールドを指定してください。",
            "error-invalid-length-too-short": `最小長は 3 です。`,
            "emailInstruction":"ユーザー名またはメールアドレスを入力すると、新しいパスワードを作成する手順が送信されます。"

        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
