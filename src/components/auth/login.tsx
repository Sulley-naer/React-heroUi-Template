import type { RootState } from '@/actions'
import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react'
import { useTranslation } from 'react-i18next'

import { useDispatch, useSelector } from 'react-redux'
import { hideLogin } from '@/actions/model/Login'
import { LockIcon, MailIcon } from '../icons'

function LoginModal() {
  const visible = useSelector(
    (state: RootState) => state.loginModel.loginVisible,
  )
  const dispatch = useDispatch()
  const onClose = () => dispatch(hideLogin())

  const { t } = useTranslation('home') // 可根据你的命名空间调整

  return (
    <Modal isOpen={visible} placement="top-center" onOpenChange={onClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t('Login')}
            </ModalHeader>
            <ModalBody>
              <Input
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label={t('Email')}
                placeholder={t('Enter your email')}
                variant="bordered"
              />
              <Input
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label={t('Password')}
                placeholder={t('Enter your password')}
                type="password"
                variant="bordered"
              />
              <div className="flex py-2 px-1 justify-between">
                <Checkbox classNames={{ label: 'text-small' }}>
                  {t('Remember me')}
                </Checkbox>
                <Link color="primary" href="#" size="sm">
                  {t('Forgot password?')}
                </Link>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                {t('Close')}
              </Button>
              <Button color="primary" onPress={onClose}>
                {t('Sign in')}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
