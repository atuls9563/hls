// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const AppBarContent = props => {
  // ** Props
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding
  } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {userHorizontalAppBarBranding ? (
        userHorizontalAppBarBranding(props)
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
            <Typography variant='h6' sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
              {themeConfig.templateName}
            </Typography>
          </StyledLink>
        </Link>
      )}
      {userHorizontalAppBarContent ? userHorizontalAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
