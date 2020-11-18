import config from '@/service/config'

export const homeDirTrigger = 'homeDir'
export const setDefaultDir = () => localStorage.getItem(homeDirTrigger) || config.defaultPath
