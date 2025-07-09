import type { RootState } from '@/actions'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { hideRegister } from '@/actions/model/Register.ts'

// 👉 提交表单逻辑
function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  formRef: React.RefObject<HTMLFormElement>,
  t: (key: string) => string,
  setAction: (a: string) => void,
  setErrors: (e: any) => void,
) {
  e.preventDefault()
  const formData = new FormData(formRef.current!)
  const username = formData.get('username')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const pwd = formData.get('pwd')?.toString().trim()
  const confirmPwd = formData.get('confirmPwd')?.toString().trim()
  const code = formData.get('code')?.toString().trim()

  const newErrors: Record<string, string> = {}
  if (!username)
    newErrors.username = t('Please enter a valid username')
  if (!email)
    newErrors.email = t('Please enter a valid email')
  if (!pwd)
    newErrors.pwd = t('Please enter a password')
  if (pwd && pwd !== confirmPwd)
    newErrors.confirmPwd = t('Passwords do not match')
  if (!code)
    newErrors.code = t('Please enter the verification code')

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    return
  }

  // setErrors({}) 设置空异常不让发送登录请求
  setAction('submitted')
  console.log('Submitting:', { username, email, pwd, code })
}

// 👉 发送验证码逻辑
function handleSendCode() {
  // TODO: 调后端接口
  console.log('发送验证码')
}

// 👉 渲染表单
function renderRegisterForm(
  formRef: React.RefObject<HTMLFormElement>,
  t: (key: string) => string,
  errors: any,
  setAction: (a: string) => void,
  setErrors: (e: any) => void,
) {
  return (
    <form
      ref={formRef}
      className="w-full max-w-xs flex flex-col gap-4"
      onReset={() => {
        setAction('reset')
        setErrors({})
      }}
      onSubmit={e => handleSubmit(e, formRef, t, setAction, setErrors)}
    >
      <Input
        isRequired
        name="username"
        type="text"
        label={t('Username')}
        labelPlacement="outside"
        placeholder={t('Enter your username')}
        errorMessage={errors.username}
      />
      <Input
        isRequired
        name="email"
        type="email"
        label={t('Email')}
        labelPlacement="outside"
        placeholder={t('Enter your email')}
        errorMessage={errors.email}
      />
      <div className="flex gap-2 items-center">
        <Input
          isRequired
          name="code"
          type="text"
          className="flex-1"
          label={t('Verification Code')}
          labelPlacement="outside"
          placeholder={t('Enter code')}
          errorMessage={errors.code}
        />
        <Button
          type="button"
          variant="flat"
          onPress={handleSendCode}
          className="mt-6"
        >
          {t('Send Code')}
        </Button>
      </div>
      <Input
        isRequired
        name="pwd"
        type="password"
        label={t('Password')}
        labelPlacement="outside"
        placeholder={t('Enter your password')}
        errorMessage={errors.pwd}
      />
      <Input
        isRequired
        name="confirmPwd"
        type="password"
        label={t('Confirm Password')}
        labelPlacement="outside"
        placeholder={t('Confirm your password')}
        errorMessage={errors.confirmPwd}
      />
    </form>
  )
}

// ✅ 主组件
export default function RegisterModal() {
  const { t } = useTranslation('Home')
  const dispatch = useDispatch()
  const visible = useSelector(
    (state: RootState) => state.RegisterModel.loginVisible,
  )
  const onClose = () => dispatch(hideRegister())

  const formRef = React.useRef<HTMLFormElement>(null)
  const [action, setAction] = React.useState<string | null>(null)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  return (
    <Modal isOpen={visible} placement="top-center" onOpenChange={onClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 m-auto">
              {t('Register')}
            </ModalHeader>
            <ModalBody className="mx-auto">
              {renderRegisterForm(formRef, t, errors, setAction, setErrors)}
              {action && (
                <div className="text-small text-default-500">
                  Action:
                  {' '}
                  <code>{action}</code>
                </div>
              )}
            </ModalBody>
            <ModalFooter className="pt-4 mx-auto">
              <Button
                type="reset"
                variant="flat"
                onPress={() => formRef.current?.reset()}
              >
                Reset
              </Button>
              <Button
                color="primary"
                type="button"
                onPress={() => formRef.current?.requestSubmit()}
              >
                Submit
              </Button>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
