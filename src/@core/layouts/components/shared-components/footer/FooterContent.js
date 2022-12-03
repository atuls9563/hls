import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../../../../../../styles/footer.module.css'
import conmtact from '../footer/information'
import ContactSupport from './contactSupport'
import { useState } from 'react'
import SupportTicket from './supportTicket'
import Information from '../footer/information'
import { useTranslation } from 'react-i18next'

const FooterContent = () => {
  const { t } = useTranslation()
  const [openEdit, setOpenEdit] = useState(false)
  const [openEdit1, setOpenEdit1] = useState(false)
  const [openEdit2, setOpenEdit2] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClickOpen1 = () => setOpenEdit1(true)
  const handleEditClickOpen2 = () => setOpenEdit2(true)
  const handleEditClose = () => setOpenEdit(false)
  const handleEditClose1 = () => setOpenEdit1(false)
  const handleEditClose2 = () => setOpenEdit2(false)
  
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', mr: 2 }}>
      <Box className={styles.footer}>
        <span>
          <ContactSupport
            openEdit1={openEdit1}
            setOpenEdit1={setOpenEdit1}
            handleEditClickOpen1={handleEditClickOpen1}
            handleEditClose1={handleEditClose1}
          />
          <Link target='_blank' onClick={handleEditClickOpen1}>
            <Typography className={styles.text}> {`${t('Contact Support')}`} </Typography>
          </Link>
        </span>
        <span>
          <SupportTicket
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            handleEditClickOpen={handleEditClickOpen}
            handleEditClose={handleEditClose}
          />
          <Link target='_blank' onClick={handleEditClickOpen}>
            <Typography className={styles.text}>{`${t('Support Ticket')}`}</Typography>
          </Link>
        </span>
        <span>
          <Information
            openEdit2={openEdit2}
            setOpenEdit2={setOpenEdit2}
            handleEditClickOpen2={handleEditClickOpen2}
            handleEditClose2={handleEditClose2}
          />
        </span>
        <Link target='_blank' onClick={handleEditClickOpen2}>
          <Typography className={styles.text}>{`${t('Information')}`}</Typography>
        </Link>
      </Box>

      <Typography>
        <Box component='span'>
          {`${t('©Allied Universal. All rights reserved')}`} -
          <Link  href='/privacyPolicy'>
            {`${t('Privacy Policy')}`}
          </Link>
        </Box>
      </Typography>
    </Box>
  )
}

export default FooterContent
