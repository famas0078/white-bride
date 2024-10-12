import http from "../http-common";
import { data } from "../global_variables/global_variables"

export default {
    sendMessage(name, phone) {

        const time = new Date().toLocaleDateString()

        const formattedText = `
            <b>Обращение</b>
            <i>Дата: ${time}</i>
            <i>Имя: ${name}</i>
            <pre>${phone}</pre>`

        return http.get(`https://api.telegram.org/bot${data.token_telegram_bot}/sendMessage`, {
            params: {
                chat_id: data.id_chat,
                text: formattedText,
                parse_mode: "HTML"
            }
        });
    },
}