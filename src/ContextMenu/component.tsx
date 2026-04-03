import './component.css'
import { type FC, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type ContextMenuItem = {
  label: string
  onClick: () => void
}

type ContextMenuComponentProps = {
  position: { x: number; y: number }
  items: readonly ContextMenuItem[]
  onClose: () => void
}

const ContextMenuComponent: FC<ContextMenuComponentProps> = ({ position, items, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    const handleScroll = () => onClose()

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('scroll', handleScroll, true)
    }
  }, [onClose])

  return createPortal(
    <div ref={menuRef} className="ContextMenu" style={{ top: position.y, left: position.x }}>
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="ContextMenu__Item"
          onClick={() => {
            onClose()
            item.onClick()
          }}
        >
          {item.label}
        </button>
      ))}
    </div>,
    document.body,
  )
}

export default ContextMenuComponent
