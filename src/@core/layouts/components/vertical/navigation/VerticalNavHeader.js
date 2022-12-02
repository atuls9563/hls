// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons
import Close from 'mdi-material-ui/Close'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(4),
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)({
  fontWeight: 700,
  lineHeight: 1.2,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { skin, direction, navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const svgFillSecondary = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return `rgba(${theme.palette.customColors.dark}, 0.68)`
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return `rgba(${theme.palette.customColors.light}, 0.68)`
    } else {
      return theme.palette.text.secondary
    }
  }

  const svgFillDisabled = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return `rgba(${theme.palette.customColors.dark}, 0.38)`
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return `rgba(${theme.palette.customColors.light}, 0.38)`
    } else {
      return theme.palette.text.disabled
    }
  }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 40) / 8
      }
    } else {
      return 5.5
    }
  }

  const svgRotationDeg = () => {
    if (navCollapsed) {
      if (direction === 'rtl') {
        if (navHover) {
          return 0
        } else {
          return 180
        }
      } else {
        if (navHover) {
          return 180
        } else {
          return 0
        }
      }
    } else {
      if (direction === 'rtl') {
        return 180
      } else {
        return 0
      }
    }
  }

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              width={40}
              fill='none'
              height={22}
              viewBox='0 0 184.000000 172.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <g transform='translate(0.000000,172.000000) scale(0.100000,-0.100000)' fill='#ff4d49' stroke='none'>
                <path
                  d='M605 1530 c-28 -31 -24 -79 9 -107 15 -12 36 -23 46 -23 33 0 73 43
73 78 0 45 -28 72 -73 72 -24 0 -43 -7 -55 -20z'
                />
                <path
                  d='M1135 1530 c-28 -31 -24 -79 9 -107 15 -12 36 -23 46 -23 33 0 73 43
73 78 0 45 -28 72 -73 72 -24 0 -43 -7 -55 -20z'
                />
                <path
                  d='M872 1347 c-12 -13 -22 -36 -22 -51 0 -34 41 -76 75 -76 33 0 75 41
75 73 0 67 -83 102 -128 54z'
                />
                <path
                  d='M620 1227 c-41 -14 -80 -67 -80 -109 0 -67 52 -118 120 -118 96 0
150 96 100 177 -30 50 -82 69 -140 50z'
                />
                <path
                  d='M1150 1227 c-66 -23 -98 -104 -65 -167 21 -41 53 -60 103 -60 97 0
153 95 102 177 -30 50 -82 69 -140 50z'
                />
                <path
                  d='M253 1175 c-29 -20 -37 -59 -19 -94 25 -47 79 -56 114 -18 62 65 -21
164 -95 112z'
                />
                <path
                  d='M1509 1180 c-28 -16 -43 -64 -28 -92 48 -91 174 -37 134 58 -18 42
-66 58 -106 34z'
                />
                <path
                  d='M864 996 c-37 -16 -69 -55 -84 -101 -29 -86 50 -185 147 -185 79 0
143 68 143 151 0 106 -108 177 -206 135z'
                />
                <path
                  d='M427 913 c-8 -10 -19 -30 -22 -45 -6 -22 -1 -33 24 -59 26 -25 37
-30 59 -24 60 14 85 83 46 126 -22 25 -85 26 -107 2z'
                />
                <path
                  d='M1315 910 c-28 -31 -24 -79 9 -107 15 -12 36 -23 46 -23 33 0 73 43
73 78 0 45 -28 72 -73 72 -24 0 -43 -7 -55 -20z'
                />
                <path
                  d='M598 704 c-35 -18 -58 -62 -58 -110 0 -28 8 -44 33 -69 19 -19 46
-37 61 -41 40 -10 97 16 124 56 68 100 -52 223 -160 164z'
                />
                <path
                  d='M1128 704 c-35 -18 -58 -62 -58 -110 0 -28 8 -44 33 -69 19 -19 46
-37 61 -41 40 -10 97 16 124 56 68 100 -52 223 -160 164z'
                />
                <path
                  d='M263 668 c-30 -15 -46 -58 -34 -91 12 -30 39 -47 75 -47 63 0 90 89
40 129 -29 23 -48 25 -81 9z'
                />
                <path
                  d='M1504 657 c-67 -58 -3 -153 81 -121 8 4 22 19 30 35 18 34 8 69 -27
93 -31 22 -52 20 -84 -7z'
                />
                <path
                  d='M888 484 c-52 -28 -50 -106 4 -128 39 -17 63 -11 88 22 33 41 22 84
-27 110 -27 15 -32 15 -65 -4z'
                />
                <path
                  d='M601 284 c-29 -36 -26 -60 9 -96 25 -24 36 -29 58 -23 41 10 62 34
62 72 0 70 -86 101 -129 47z'
                />
                <path
                  d='M1131 284 c-29 -36 -26 -60 9 -96 25 -24 36 -29 58 -23 41 10 62 34
62 72 0 70 -86 101 -129 47z'
                />
              </g>
            </svg>
            <HeaderTitle variant='h6' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2 }) }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Close fontSize='small' />
        </IconButton>
      ) : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{ p: 0, color: 'text.primary', backgroundColor: 'transparent !important' }}
        >
          {userMenuLockedIcon && userMenuUnlockedIcon ? (
            navCollapsed ? (
              userMenuUnlockedIcon
            ) : (
              userMenuLockedIcon
            )
          ) : (
            <Box
              width={22}
              fill='none'
              height={22}
              component='svg'
              viewBox='0 0 22 22'
              xmlns='http://www.w3.org/2000/svg'
              sx={{
                transform: `rotate(${svgRotationDeg()}deg)`,
                transition: 'transform .25s ease-in-out .35s'
              }}
            >
              <path
                fill={svgFillSecondary()}
                d='M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z'
              />
              <path
                fill={svgFillDisabled()}
                d='M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z'
              />
            </Box>
          )}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
