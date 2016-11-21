-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-11-21 17:02:09
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(8) CHARACTER SET utf8 NOT NULL,
  `sex` varchar(4) CHARACTER SET utf8 NOT NULL,
  `age` tinyint(1) unsigned NOT NULL,
  `tel` varchar(13) CHARACTER SET utf8 DEFAULT '-',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `students`
--

INSERT INTO `students` (`id`, `name`, `sex`, `age`, `tel`) VALUES
(1, '汉子', '男', 25, '8888888888888'),
(2, 'LBJ', '男', 31, '888888'),
(3, 'wade', '男', 33, '293857235'),
(4, '林志玲', '女', 41, '235235'),
(5, '李宇春', '人妖', 33, '123456789'),
(6, '波多野结衣', '女优', 31, '222222222222'),
(7, '周杰伦', '男', 35, '19805783924'),
(8, '1', '3', 2, '4'),
(9, '1', '3', 2, '4'),
(10, 'xingming', '1', 2, '1111'),
(11, 'xingming', '1', 2, '1111');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
