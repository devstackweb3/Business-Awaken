import React from 'react'
import styles from '@/styles/Modal.module.css'
import { RiCloseLine } from 'react-icons/ri'
import Calendly from '@/components/calendly'

const Modal = ({ setIsOpen }: any) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className="grid place-items-center w-[400px] py-2 rounded-md bg-white">
          <div className="mt-4">
            <Calendly />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
