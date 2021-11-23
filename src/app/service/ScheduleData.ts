import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE : Schedule[]=[
    {id:1,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'Persipon',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:2,PlayingDate:new Date(2021,8,12),HomeTeam:'RRQ',
    AwayTeam:'Pisipon',HomeScore:2,AwayScore:0,
    RefName:'Jaka',Notes:'Overkill'},
    {id:3,PlayingDate:new Date(2021,8,14),HomeTeam:'EVOS',
    AwayTeam:'Masimas',HomeScore:3,AwayScore:2,
    RefName:'Jeke',Notes:'Overmute'},
    {id:4,PlayingDate:new Date(2021,8,16),HomeTeam:'AE',
    AwayTeam:'Bambang',HomeScore:3,AwayScore:2,
    RefName:'Juku',Notes:'Overloud'},
    {id:5,PlayingDate:new Date(2021,8,18),HomeTeam:'BTR',
    AwayTeam:'Merdeka',HomeScore:2,AwayScore:0,
    RefName:'Jiki',Notes:'Overskill'},
]

export const Teams:Team[]=[
    {ID:1,Name:'Persija',Type:'Klub Local'},
    {ID:2,Name:'RRQ',Type:'Klub Local'},
    {ID:3,Name:'EVOS',Type:'Klub Local'},
    {ID:4,Name:'AE',Type:'Klub Local'},
    {ID:5,Name:'BTR',Type:'Klub Local'},
    {ID:6,Name:'Persipon',Type:'Klub Local'},
    {ID:7,Name:'Pisipon',Type:'Klub Local'},
    {ID:8,Name:'Masimas',Type:'Klub Local'},
    {ID:9,Name:'Bambang',Type:'Klub Local'},
    {ID:10,Name:'Merdeka',Type:'Klub Local'},
]