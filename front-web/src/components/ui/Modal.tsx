import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal()
      document.body.classList.add('overflow-hidden')
    } else {
      modalRef.current?.close()
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <dialog ref={modalRef} className="modal modal-open">
      <div className="modal-box">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="btn btn-ghost btn-sm">
            <FaTimes />
          </button>
        </div>
        <div className="py-4">{children}</div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </dialog>,
    document.body
  )
}