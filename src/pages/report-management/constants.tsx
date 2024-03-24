// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Utils Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { GridColDef } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import ReactPlayer from 'react-player/lazy'

export type ProjectTableRowType = {
  _id: string
  createdAt: string
  reportedTarget: string
  reports:
  {
    user: string
    reportContent: string
    reason: any[]
    _id: string
  }
  totalReport: number
  type: string
}

interface CellType {
  row: ProjectTableRowType
}







