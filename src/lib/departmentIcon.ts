const ICON_DIR = '/images/departments' 
const ICON_EXT = 'PNG'                
export function getDepartmentIcon(slug: string, icon?: string | null) {
  return icon || `${ICON_DIR}/${slug}.${ICON_EXT}`
}