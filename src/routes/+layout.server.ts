import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event: { locals: { auth: () => any } }) => {
    return {
        session: await event.locals.auth(),
    }
}