import type { Movie } from '@/types'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from '@nextui-org/react'

interface ModalItemProps {
	isOpen: boolean
	onOpenChange: (open: boolean) => void
	children: React.ReactNode
	title?: string
}

export default function ModalItem({
	isOpen,
	onOpenChange,
	title,
	children,
}: ModalItemProps) {
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
						<ModalBody>{children}</ModalBody>
						<ModalFooter>
							<Button color="primary" onPress={onClose}>
								Cerrar
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
